source :rubygems

gem 'iconv'

group :assets do
 gem 'sass-rails', '~> 3.2.5'
 gem 'coffee-rails', '~> 3.2.2'
 gem 'uglifier', '>= 1.0.3'
end
prod_location = 'git@github.com:jdfdesign/gko_cms3.git'
prod_version = "= 0.5.15"
group :production do
	gem "gko_core", prod_version, :git => prod_location
	gem "gko_auth", prod_version, :git => prod_location
	gem "gko_images", prod_version, :git => prod_location
	gem "gko_documents", prod_version, :git => prod_location
	gem "gko_inquiries", prod_version, :git => prod_location
	gem "gko_themes", prod_version, :git => prod_location
end
#group :development do
#	gem "gko_core", :path => '~/Github/gko_cms3/gko_core'
#	gem "gko_auth", :path => '~/Github/gko_cms3/gko_auth'
#	gem "gko_images", :path => '~/Github/gko_cms3/gko_images'
#	gem "gko_documents", :path => '~/Github/gko_cms3/gko_documents'
#	gem "gko_inquiries", :path => '~/Github/gko_cms3/gko_inquiries'
#	gem "gko_themes", :path => '~/Github/gko_cms3/gko_themes' 
#end    
