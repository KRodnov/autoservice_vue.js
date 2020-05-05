let app = new Vue({
    el: '#app',
    data: {
        seen: false,
        number: '',
        urgency: '',
        regNum: '',
        modelAuto: '',
        nameOwner: '',
        phoneOwner: '',
        kindWork: '',
        selectMechanic: '',
        priceWork: '',
        comments: '',
        informs:[]
    },
        methods: {
            addCar: function () {
                this.informs.push({
                    number: this.number,
                    urgency: this.urgency,
                    regNum: this.regNum,
                    modelAuto: this.modelAuto,
                    nameOwner: this.nameOwner,
                    phoneOwner: this.phoneOwner,
                    kindWork: this.kindWork,
                    selectMechanic: this.selectMechanic,
                    priceWork: this.priceWork,
                    comments: this.comments
                });
                this.number = '';
                this.urgency = '';
                this.regNum = '';
                this.modelAuto = '';
                this.nameOwner = '';
                this.phoneOwner = '';
                this.kindWork = '';
                this.selectMechanic = '';
                this.priceWork = '';
                this.comments = '';
                this.seen = false;
            },

            visible: function () {
                this.seen = true;
            },
            unvisible: function () {
                this.seen = false;
            }
        }
            });
