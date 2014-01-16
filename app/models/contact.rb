class Contact < MailForm::Base
  attributes :civility, :validate => true
  attributes :lastname, :validate => true
  attributes :firstname, :validate => true
  attributes :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attributes :phone, :validate => true
  attributes :country, :validate => true
  attributes :company
  attributes :professional
  attributes :message
  attributes :nickname, :captcha => true
  
  validates :email, :presence => true, :email => true
  
  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Contact from website",
      :to => Site.current.preferred_contact_email,
      :from => %("#{lastname}" <#{email}>)
    }
  end
  
end