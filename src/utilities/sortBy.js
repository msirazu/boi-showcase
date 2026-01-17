export const sortList = (list, type) => {
        if (type === 'page') {
            return [...list.sort((a, b) => a.totalPages - b.totalPages)];
        } else if (type === 'rating') {
            return [...list.sort((a, b) => a.rating - b.rating)];
        }
        return list;
    }