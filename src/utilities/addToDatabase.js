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
        return false;
    } else {
        storedBookData.push(id);
        const bData = JSON.stringify(storedBookData);
        localStorage.setItem('readList', bData);
        return true;
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
        return false;
    } else {
        wishListData.push(id);
        const wishBook = JSON.stringify(wishListData);
        localStorage.setItem('wishList', wishBook);
        return true;
    }
}

export { addToLocalStorageDatabase, getFromLocalStorage, addToLocalStorageWishList, getWishListFromLocalStorage };