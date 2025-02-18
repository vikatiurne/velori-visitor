export const formatDate = (date) => {
    const today = new Date();
    const dateObj = new Date(date);
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };
    const isToday = dateObj.getDate() === today.getDate() &&
        dateObj.getMonth() === today.getMonth() &&
        dateObj.getFullYear() === today.getFullYear();
    return isToday
        ? 'cьогодні'
        : dateObj.toLocaleDateString(undefined, options);
};
