class Publication < ActiveRecord::Base

  mount_uploader :pdf, PdfUploader

end
