import Bookmark from "../models/bookmarkModel.js";

const createBookmark = async (req, res) => {
    try {
        var bookmarkData = req.body;
        var newBookmark = await Bookmark.create(bookmarkData);
        res.status(200).json(newBookmark);
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};
const getBookmarks = async (req, res) => {
    var bookmarkList = await Bookmark.find();
    res.json(bookmarkList);
};

const deleteBookmark = async (req, res) => {
    var bookmarkId = req.params.idBookmark;
    await Bookmark.findByIdAndDelete(bookmarkId);
    res.status(200).json();
};

/*
const getBookmarksByUserId=(req,res)=>{
    var idUser=re.params.idUser;
    var userBookmarks=Bookmark.find({idUser:user});
    res.status(200).json(userBookmarks);

}
*/


export { createBookmark, getBookmarks, deleteBookmark };
