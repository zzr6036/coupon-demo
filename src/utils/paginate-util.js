export const paginate = (posts, currentPage, numberPerPage) => {
    const firstIndex = numberPerPage * currentPage;
    const lastIndex = firstIndex + numberPerPage;
    const currentPosts = posts.slice(firstIndex, lastIndex);
    return currentPosts;
};

export const getPages = (posts, numberPerPage) => {
    const numberOfPages = Math.ceil(posts.length / numberPerPage);
    let pages = [];
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i);
    }
    return pages;
};