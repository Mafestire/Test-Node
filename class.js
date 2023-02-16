module.exports = function(ProdID, ProdName, ProdPrice, Description, ProdSize) {
    this.ProdID = ProdID,
    this.ProdName = ProdName,
    this.ProdPrice = ProdPrice,
    this.Description = Description,
    this.ProdSize = ProdSize,
    this.allDetails = function(){
        return this.ProdID + ' ' + this.ProdName + ' ' + this.ProdPrice + ' ' + this.Description + ' ' + this.ProdSize;
    }
}