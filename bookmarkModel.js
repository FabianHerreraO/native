import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
    nombreCientifico: {
        type: String,
        required: [true, "Species name required!"],
    },
    nombreComun: {
        type: String,
        required: [true, "Species common name required!"],
    },
    origen: {
        type: String,
        required: [true, "Origin required!"],
    },
    estadoConservacion: {
        type: String,
        required: [true, "Conservation status required!"],
    },
    familia: {
        type: String,
        required: [true, "Family required!"]
    },
    idUser:{type:mongoose.Types.ObjectId, ref:"users"}
});

const Bookmark = mongoose.model("bookmarks", BookmarkSchema);

export default Bookmark;
