// SPDX-License-Identifier: MIT

/*
 * NounsAssetProvider is a wrapper around NounsDescriptor so that it offers
 * various characters as assets to compose (not individual parts).
 *
 * Created by Satoshi Nakajima (@snakajima)
 */

pragma solidity ^0.8.6;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IAssetStore, IAssetStoreEx} from "./interfaces/IAssetStore.sol";
import {IAssetProvider} from "./interfaces/IAssetProvider.sol";
import {ISVGHelper} from "./interfaces/ISVGHelper.sol";
import "./libs/Trigonometry.sol";
import "./libs/Randomizer.sol";
import "./libs/SVGHelper.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/interfaces/IERC165.sol";
import "hardhat/console.sol";

contract SplatterProvider is IAssetProvider, IERC165, Ownable {
    using Strings for uint32;
    using Strings for uint256;
    using Randomizer for Randomizer.Seed;
    using Trigonometry for uint256;

    struct Props {
        uint256 count; // number of control points
        uint256 length; // average length fo arm
        uint256 dot; // average size of dot
    }

    string constant providerKey = "splt";
    address public receiver;
    ISVGHelper svgHelper;

    constructor() {
        receiver = owner();
        svgHelper = new SVGHelper(); // default helper
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override
        returns (bool)
    {
        return
            interfaceId == type(IAssetProvider).interfaceId ||
            interfaceId == type(IERC165).interfaceId;
    }

    function getOwner() external view override returns (address) {
        return owner();
    }

    function getProviderInfo()
        external
        view
        override
        returns (ProviderInfo memory)
    {
        return ProviderInfo(providerKey, "Splatter", this);
    }

    function totalSupply() external pure override returns (uint256) {
        return 0; // indicating "dynamically (but deterministically) generated from the given assetId)
    }

    function processPayout(uint256 _assetId) external payable override {
        address payable payableTo = payable(receiver);
        payableTo.transfer(msg.value);
        emit Payout(providerKey, _assetId, payableTo, msg.value);
    }

    function setReceiver(address _receiver) external onlyOwner {
        receiver = _receiver;
    }

    function setHelper(ISVGHelper _svgHelper) external onlyOwner {
        svgHelper = _svgHelper;
    }

    function generatePoints(Randomizer.Seed memory _seed, Props memory _props)
        internal
        pure
        returns (Randomizer.Seed memory, ISVGHelper.Point[] memory)
    {
        Randomizer.Seed memory seed = _seed;
        uint256[] memory degrees = new uint256[](_props.count);
        uint256 total;
        for (uint256 i = 0; i < _props.count; i++) {
            uint256 degree;
            (seed, degree) = seed.randomize(100, 90);
            degrees[i] = total;
            total += degree;
        }

        uint256 r0 = 220;
        uint256 r1 = r0;
        ISVGHelper.Point[] memory points = new ISVGHelper.Point[](
            _props.count + (_props.count / 3) * 5
        );
        uint256 j = 0;
        for (uint256 i = 0; i < _props.count; i++) {
            {
                uint256 angle = (degrees[i] * 0x4000) / total + 0x4000;
                if (i % 3 == 0) {
                    uint256 extra;
                    (seed, extra) = seed.randomize(_props.length, 100);
                    uint256 arc;
                    (seed, arc) = seed.randomize(_props.dot, 50);

                    points[j].x = int32(
                        512 + ((angle - 30).cos() * int256(r1)) / 0x8000
                    );
                    points[j].y = int32(
                        512 + ((angle - 30).sin() * int256(r1)) / 0x8000
                    );
                    points[j].c = false;
                    points[j].r = 1024;
                    j++;
                    points[j].x = int32(
                        512 + ((angle - 30).cos() * int256(r1 + extra)) / 0x8000
                    );
                    points[j].y = int32(
                        512 + ((angle - 30).sin() * int256(r1 + extra)) / 0x8000
                    );
                    points[j].c = false;
                    points[j].r = 566;
                    j++;
                    points[j].x = int32(
                        512 +
                            ((angle - arc).cos() *
                                int256(r1 + (extra * (150 + arc)) / 150)) /
                            0x8000
                    );
                    points[j].y = int32(
                        512 +
                            ((angle - arc).sin() *
                                int256(r1 + (extra * (150 + arc)) / 150)) /
                            0x8000
                    );
                    points[j].c = false;
                    points[j].r = 566;
                    j++;
                    points[j].x = int32(
                        512 +
                            ((angle + arc).cos() *
                                int256(r1 + (extra * (150 + arc)) / 150)) /
                            0x8000
                    );
                    points[j].y = int32(
                        512 +
                            ((angle + arc).sin() *
                                int256(r1 + (extra * (150 + arc)) / 150)) /
                            0x8000
                    );
                    points[j].c = false;
                    points[j].r = 566;
                    j++;
                    points[j].x = int32(
                        512 + ((angle + 30).cos() * int256(r1 + extra)) / 0x8000
                    );
                    points[j].y = int32(
                        512 + ((angle + 30).sin() * int256(r1 + extra)) / 0x8000
                    );
                    points[j].c = false;
                    points[j].r = 566;
                    j++;
                    points[j].x = int32(
                        512 + ((angle + 30).cos() * int256(r1)) / 0x8000
                    );
                    points[j].y = int32(
                        512 + ((angle + 30).sin() * int256(r1)) / 0x8000
                    );
                    points[j].c = false;
                    points[j].r = 1024;
                    j++;
                } else {
                    points[j].x = int32(
                        512 + (angle.cos() * int256(r1)) / 0x8000
                    );
                    points[j].y = int32(
                        512 + (angle.sin() * int256(r1)) / 0x8000
                    );
                    points[j].c = false;
                    points[j].r = 566;
                    j++;
                }
            }
            {
                uint256 r2;
                (seed, r2) = seed.randomize(r1, 20);
                r1 = (r2 * 2 + r0) / 3;
            }
        }
        return (seed, points);
    }

    function generatePath(Randomizer.Seed memory _seed, Props memory _props)
        public
        view
        returns (Randomizer.Seed memory seed, bytes memory svgPart)
    {
        ISVGHelper.Point[] memory points;
        (seed, points) = generatePoints(_seed, _props);
        svgPart = svgHelper.PathFromPoints(points);
    }

    function generateProps(Randomizer.Seed memory _seed)
        public
        pure
        returns (Randomizer.Seed memory seed, Props memory props)
    {
        seed = _seed;
        props = Props(30, 40, 100);
        (seed, props.count) = seed.randomize(props.count, 50); // +/- 50%
        (seed, props.length) = seed.randomize(props.length, 50); // +/- 50%
        (seed, props.dot) = seed.randomize(props.dot, 50);
        props.count = (props.count / 3) * 3; // always multiple of 3
    }

    function generateSVGPart(uint256 _assetId)
        external
        view
        override
        returns (string memory svgPart, string memory tag)
    {
        Randomizer.Seed memory seed = Randomizer.Seed(_assetId, 0);
        Props memory props;
        (seed, props) = generateProps(seed);

        bytes memory path;
        (, path) = generatePath(seed, props);

        tag = string(abi.encodePacked(providerKey, _assetId.toString()));
        svgPart = string(
            abi.encodePacked(
                '<g id="',
                tag,
                '">\n'
                '<path d="',
                path,
                '"/>\n'
                "</g>\n"
            )
        );
    }
}
