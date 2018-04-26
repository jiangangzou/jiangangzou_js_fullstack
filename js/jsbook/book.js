//图书馆

function Book(isbn, title, author) {
    this.setIsbn(isbn);


}
Book.prototype._setIsbn = function(isbn) {
    if(this._checkIsbn()) {
        this.isbn = isbn;
        this.title=title || '未给标题';
        this.author=author || '未给作者';
    }  //正则表达式
    else {
        throw new Error('isbn有误');
    }
}

Book.prototype.borrow = function(){

}
Book.prototype._checkIsbn = function(isbn){
    return /[0-9]{10}.test(isbn);
}

Book.prototype.getTitle = function() {
    return this.title;
}
Book.prototype.getAuthor = function() {
    return this.author;
}
varbook= new Book('sjs1212','三国演义','罗贯中');
