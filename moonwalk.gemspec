# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "moonwalk"
  spec.version       = "1.0.0"
  spec.authors       = ["Lucas Santos"]
  spec.email         = ["leos.developer@gmail.com"]
  spec.summary       = "A fast and minimalist Jekyll theme with clean dark mode."
  spec.homepage      = "https://oondev.github.io/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15.0"
  spec.add_runtime_dependency "jekyll-soopr-seo-tag", "~> 2.7.3"
  spec.add_runtime_dependency "rouge", "~> 3.23.0"
  spec.add_runtime_dependency "webrick", "~> 1.7"
end
