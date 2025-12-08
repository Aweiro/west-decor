import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Only POST allowed' });
    }

    const { file } = req.body;

    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // Завантаження
    const uploaded = await cloudinary.uploader.upload(file, {
      folder: 'products', // папка в Cloudinary
    });

    return res.status(200).json({ url: uploaded.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed', message: err.message });
  }
}