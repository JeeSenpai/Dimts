"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesHelper = void 0;
class FilesHelper {
    static customFileName(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        let fileExtension = "";
        if (file.mimetype.indexOf("application/pdf") > -1) {
            fileExtension = "pdf";
        }
        if (file.mimetype.indexOf("image/png") > -1) {
            fileExtension = "webp";
        }
        if (file.mimetype.indexOf("image/jpeg") > -1) {
            fileExtension = "webp";
        }
        if (file.mimetype.indexOf("image/jpg") > -1) {
            fileExtension = "webp";
        }
        const originalName = file.originalname.split(".")[0];
        cb(null, originalName + '-' + uniqueSuffix + "." + fileExtension);
    }
    static destinationPath(req, file, cb) {
        cb(null, './files/');
    }
}
exports.FilesHelper = FilesHelper;
//# sourceMappingURL=helper.js.map