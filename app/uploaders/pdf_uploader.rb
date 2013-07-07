# encoding: utf-8

class PdfUploader < CarrierWave::Uploader::Base

  include CarrierWave::MimeTypes

   storage :fog

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  process :set_content_type

end
