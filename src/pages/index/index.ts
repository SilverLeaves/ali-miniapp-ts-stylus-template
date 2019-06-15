let app = getApp()

Page({
  data() {
    return {
      data: {
        input: "我是厨师值哦",
        textarea: "我是谁？",
        switch: true,
      },
      form: [{
        type: "text",
        mode: "",
        name: "text",
        text: "文字",
        icon: ""
      }, {
        type: "input",
        mode: "",
        name: "input",
        text: "输入",
        icon: ""
      },
      {
        type: "textarea",
        mode: "",
        name: "textarea",
        text: "文本域",
        icon: ""
      },
      {
        type: "picker",
        mode: "",
        name: "picker",
        text: "选择器",
        icon: ""
      },
      {
        type: "picker",
        mode: "",
        name: "picker2",
        text: "选择器2",
        label:"label",
        icon: ""
      },
      {
        type: "date",
        mode: "",
        name: "date",
        text: "日期",
        icon: ""
      },
      {
        type: "switch",
        mode: "",
        name: "switch",
        text: "switch",
        icon: ""
      },
      {
        type: "upload",
        mode: "",
        name: "upload",
        text: "上传",
        icon: ""
      }],
      selection: {
        picker: ["picker-1","picker-2","picker-3"],
        picker2: [{label:"picker-1"},{label:"picker-2"},{label:"picker-3"}],
      }
    }
  },
  change(data) {
    console.log(data)

    this.setData({
      [`data.${data.name}`]: data.value
    })
  },

});

export { }