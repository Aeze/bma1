require 'spec_helper'

describe "news/new" do
  before(:each) do
    assign(:news, stub_model(News,
      :title => "MyString",
      :content => "MyText",
      :link => "MyString"
    ).as_new_record)
  end

  it "renders new news form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", news_index_path, "post" do
      assert_select "input#news_title[name=?]", "news[title]"
      assert_select "textarea#news_content[name=?]", "news[content]"
      assert_select "input#news_link[name=?]", "news[link]"
    end
  end
end
