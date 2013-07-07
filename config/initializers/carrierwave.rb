CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: "AKIAJMXVCZ2EQL2DTANA",
    aws_secret_access_key: "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"
  }
  config.fog_directory = "CTSM"
end