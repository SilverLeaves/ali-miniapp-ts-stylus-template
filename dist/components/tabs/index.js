Component({
    mixins: [],
    data: function () {
        return {
            TabCur: 0,
        };
    },
    props: {
        onChange() {
            console.log(this.data);
        },
        tabNav: [],
        top: '0px',
        bottom: '0px'
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        tabSelect(e) {
            console.log(e);
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                scrollLeft: (e.currentTarget.dataset.id - 1) * 60
            });
        }
    }
});
