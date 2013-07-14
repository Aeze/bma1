require 'spec_helper'

describe "courses/new" do
  before(:each) do
    assign(:course, stub_model(Course,
      :title => "MyString",
      :content => "MyText",
      :url => "MyString"
    ).as_new_record)
  end

  it "renders new course form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", courses_path, "post" do
      assert_select "input#course_title[name=?]", "course[title]"
      assert_select "textarea#course_content[name=?]", "course[content]"
      assert_select "input#course_url[name=?]", "course[url]"
    end
  end
end
