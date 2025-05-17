#!/bin/bash

# Make sure ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "This script requires ImageMagick. Please install it first."
    exit 1
fi

SOURCE="images/neural_network_logo.png"

# Create various sized favicons
convert "$SOURCE" -resize 32x32 images/favicon-32x32.png
convert "$SOURCE" -resize 192x192 images/favicon-192x192.png
convert "$SOURCE" -resize 512x512 images/favicon-512x512.png
convert "$SOURCE" -resize 180x180 images/apple-touch-icon-180x180.png

# Create favicon.ico (multi-resolution)
convert "$SOURCE" -resize 16x16 "$SOURCE" -resize 32x32 "$SOURCE" -resize 48x48 "$SOURCE" -resize 64x64 images/favicon.ico

echo "Favicons created successfully!" 