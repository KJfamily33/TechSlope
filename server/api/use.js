class Use {

    constructor(name,price) {
        this.address="";
        this.use=[];
    }


    static getUseByAddressSQL(use_address) {
        let sql = `SELECT * FROM USE WHERE USE_ADDRESS = ${use_address}`;
        return sql;
    }

    static getAllUseSQL() {
        let sql = `SELECT * FROM USE`;
        return sql;
    }
}

export default Product;
