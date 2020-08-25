/**
 *  Block
 *  Data model for each block in the chain
 *
 *  @param hash {string}
 *  @param height {number}
 *  @param body {array}
 *  @param time {number}
 *  @param previousblockhash {string}
 */
class Block{
    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousblockhash = "";
    }
}

module.exports = Block