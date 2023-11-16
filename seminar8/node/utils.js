const handleErrorResponse = (res, error, message) => {
    console.error(`Error: ${message}`, error);
    return res.status(500).json({ success: false, message: `Error ${message}.` });
};

module.exports = {
    handleErrorResponse
}