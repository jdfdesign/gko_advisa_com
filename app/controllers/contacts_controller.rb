# app/controllers/contacts.rb
class ContactsController < BaseController
  def new
    @page = site.sections.find_by_template('contact')
    @contact = Contact.new
    respond_with(@contact, :template => 'pages/contact')
  end

  def create
    begin
      @page = site.sections.find_by_template('contact')
      @contact = Contact.new(params[:contact])
      @contact.request = request
      if @contact.deliver
        flash.now[:notice] = 'Thank you for your message!'
        respond_with(@contact, :template => 'pages/contact')
      else
        respond_with(@contact, :template => 'pages/contact')
      end
    rescue ScriptError
      flash[:error] = 'Sorry, this message appears to be spam and was not delivered.'
    end
  end

end