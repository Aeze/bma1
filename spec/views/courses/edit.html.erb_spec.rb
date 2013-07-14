require 'spec_helper'

describe "courses/edit" do
  before(:each) do
    @course = assign(:course, stub_model(Course,
      :title => "MyString",
      :content => "MyText",
      :url => "MyString"
    ))
  end

  it "renders the edit course form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", course_path(@course), "post" do
      assert_select "input#course_title[name=?]", "course[title]"
      assert_select "textarea#course_content[name=?]", "course[content]"
      assert_select "input#course_url[name=?]", "course[url]"
    end
  end
end
