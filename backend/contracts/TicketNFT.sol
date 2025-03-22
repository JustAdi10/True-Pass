// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract TicketNFT is ERC721A, Ownable {
    uint256 public constant MAX_TICKETS = 5000; // Max supply per event
    uint256 public ticketPrice;
    bool public saleActive = false;

    mapping(uint256 => bool) public redeemed; // Track redeemed tickets

    event TicketMinted(address indexed buyer, uint256[] ticketIds);
    event TicketRedeemed(address indexed owner, uint256 indexed ticketId);

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _ticketPrice
    ) ERC721A(_name, _symbol) Ownable(msg.sender) { // ✅ Fix: Pass msg.sender to Ownable
        ticketPrice = _ticketPrice;
    }

    function toggleSale() external onlyOwner {
        saleActive = !saleActive;
    }

    function mintTicket(uint256 quantity) external payable {
        require(saleActive, "Sale is not active");
        require(quantity > 0 && quantity <= 5, "Can mint 1-5 tickets at a time");
        require(totalSupply() + quantity <= MAX_TICKETS, "Exceeds max supply");
        require(msg.value >= ticketPrice * quantity, "Insufficient ETH");

        uint256 startId = totalSupply();
        _mint(msg.sender, quantity);

        // Emit minted ticket IDs
        uint256[] memory ticketIds = new uint256[](quantity);
        for (uint256 i = 0; i < quantity; i++) {
            ticketIds[i] = startId + i;
        }
        emit TicketMinted(msg.sender, ticketIds);
    }

    function redeemTicket(uint256 ticketId) external {
        require(ownerOf(ticketId) == msg.sender, "Not the ticket owner");
        require(!redeemed[ticketId], "Ticket already redeemed");

        redeemed[ticketId] = true;
        emit TicketRedeemed(msg.sender, ticketId);
    }

    function withdrawFunds() external onlyOwner {
        (bool success, ) = payable(owner()).call{value: address(this).balance}("");
        require(success, "Withdraw failed");
    }
}
