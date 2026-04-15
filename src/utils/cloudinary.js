import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const cloudinaryUpload = async (filePath) => {
    if (!filePath) {
        throw new Error("File path is required");
    }

    try {
        const response = await cloudinary.uploader.upload(filePath, {
            folder: "public",
            resource_type: "auto"
        });

        console.log("Uploaded to Cloudinary:", response.url);

        return response;

    } catch (error) {
        throw error;

    } finally {
        if (filePath && fs.existsSync(filePath)) {
            fs.unlink(filePath, (err) => {
                if (err) console.error("File delete error:", err);
            });
        }
    }
};
export { cloudinaryUpload };