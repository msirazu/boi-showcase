const getFromLocalStorage = () => {
    const storedBookSTR = localStorage.getItem('readList');
    if (storedBookSTR) {
        const storedBook = JSON.parse(storedBookSTR);
        return storedBook;
    } else {
        return [];
    }
}

const addToLocalStorageDatabase = (id) => {
    const storedBookData = getFromLocalStorage();
    if (storedBookData.includes(id)) {
        alert('book already added in read list')
    } else {
        storedBookData.push(id);
        const bData = JSON.stringify(storedBookData);
        localStorage.setItem('readList', bData);
    }
}

const getWishListFromLocalStorage = () => {
    const bookWishList = localStorage.getItem('wishList');
    if (bookWishList) {
        const wishBook = JSON.parse(bookWishList);
        return wishBook;
    } else {
        return [];
    }
}

const addToLocalStorageWishList = (id) => {
    const wishListData = getWishListFromLocalStorage();
    if (wishListData.includes(id)) {
        alert('book already added on wish list')
    } else {
        wishListData.push(id);
        const wishBook = JSON.stringify(wishListData);
        localStorage.setItem('wishList', wishBook);
    }
}

export { addToLocalStorageDatabase, getFromLocalStorage, addToLocalStorageWishList };