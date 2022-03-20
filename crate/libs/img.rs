use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.grayscale();
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn invert(encoded_file: &str) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img.invert();
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn brighten(encoded_file: &str, brighten_value: i32) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.brighten(brighten_value);
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn blur(encoded_file: &str, blur_sigma: f32) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.blur(blur_sigma);
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn sharpen(encoded_file: &str, blur_sigma: f32, threshold: i32) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.unsharpen(blur_sigma, threshold);
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn contrast(encoded_file: &str, c_value: f32) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.adjust_contrast(c_value);
    log(&"...Contrast effect applied".into());
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}


#[wasm_bindgen]
pub fn flip_vertical(encoded_file: &str) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.flipv();
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn flip_horizontal(encoded_file: &str) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.fliph();
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn rotate_90(encoded_file: &str) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.rotate90();
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn rotate_180(encoded_file: &str) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.rotate180();
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn rotate_270(encoded_file: &str) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.rotate270();
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}

#[wasm_bindgen]
pub fn crop(encoded_file: &str, x: u32, y: u32, width: u32, height: u32) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();
    img = img.crop(x, y, width, height);
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}