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
        this.hash = '';
        this.height = '';
        this.body = data;
        this.timestamp = '';
        this.previousblockhash = '0x';
    }
}

module.exports = Block