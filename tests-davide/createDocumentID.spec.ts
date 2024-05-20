import { describe, it, expect, vi, beforeAll } from "vitest";
import crypto from "node:crypto";
/*import { ethers } from "ethers";
import { EbsiWallet } from "@cef-ebsi/wallet-lib";
import { IssuerDetails, UserDetails, loadConfig } from "../../src/config.js";
import { execCommand } from "../../src/app.js";
import { PaginatedList } from "../../src/interfaces/index.js";*/



function generateNewDocumentId(): string {

    return `0x${crypto.randomBytes(32).toString("hex")}`;
}


describe("scripts di davide", () => {

    describe("documents api", () => {

        it("obtain a new doc ID", () => {

            let idDoc = generateNewDocumentId();
            console.log("IDDocumento = '" + idDoc + "'");
            expect(idDoc.length > 0);

        })

    })


})