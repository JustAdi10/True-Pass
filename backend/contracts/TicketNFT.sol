// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract TicketNFT is ERC721A, Ownable {
    uint256 public constant MAX_TICKETS = 5000; // Max supply per event
    uint256 public constant MAX_MINT_PER_TX = 5; // Limit per transaction
    uint256 public constant TICKET_PRICE = 1_000_000 gwei; // 0.001 ETH

    bool public saleActive = false;
    mapping(uint256 => bool) public redeemed; // Track redeemed tickets

    event TicketMinted(address indexed buyer, uint256 quantity);
    event TicketRedeemed(address indexed owner, uint256 indexed ticketId);
    event SaleToggled(bool active);

    constructor(string memory _name, string memory _symbol)
        ERC721A(_name, _symbol)
        Ownable(msg.sender) // Assign contract deployer as owner
    {}

    modifier onlyWhenSaleActive() {
        require(saleActive, "Sale is not active");
        _;
    }

    modifier onlyTicketOwner(uint256 ticketId) {
        require(ownerOf(ticketId) == msg.sender, "Not the ticket owner");
        _;
    }

    function toggleSale() external onlyOwner {
        saleActive = !saleActive;
        emit SaleToggled(saleActive);
    }

    function mintTicket(uint256 quantity) external payable onlyWhenSaleActive {
        require(quantity > 0 && quantity <= MAX_MINT_PER_TX, "Can mint 1-5 tickets per transaction");
        require(totalSupply() + quantity <= MAX_TICKETS, "Exceeds max supply");
        require(msg.value >= TICKET_PRICE * quantity, "Insufficient ETH");

        _mint(msg.sender, quantity);
        emit TicketMinted(msg.sender, quantity);
    }

    function redeemTicket(uint256 ticketId) external onlyTicketOwner(ticketId) {
        require(!redeemed[ticketId], "Ticket already redeemed");

        redeemed[ticketId] = true;
        emit TicketRedeemed(msg.sender, ticketId);
    }

    function withdrawFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
