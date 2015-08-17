var StorageManager = (function () {
    /**
     * StorageManager Constructor.
     * @constructor
     * @param {string} containerName - Name that will be used as "table name" in the local storage.
     * @example
     * var obj = new StorageManager('user');
     */
    function StorageManager(containerName) {
        this.containerName = containerName;
        if (window.localStorage.getItem(this.containerName + ':index')) {
            this.lastId = window.localStorage.getItem(this.containerName + ':index');
        }
        else {
            this.lastId = 1;
            window.localStorage.setItem(this.containerName + ':index', String(this.lastId));
        }
    }
    /**
     * Method to add data to the local storage.
     * @param {Object} data - Javascript object containing the data to be stored.
     * @returns {number} id of the inserted item.
     * @example
     * // returns id of the inserted object
     * var obj = new StorageManager('user');
     * var id = obj.addData({
     *  'firstname': 'john',
     *  'lastname': 'doe',
     *  'age': '31',
     * });
     */
    StorageManager.prototype.addData = function (data) {
        var id = this.getLastId();
        window.localStorage.setItem(this.containerName + ':' + id, JSON.stringify(data));
        this.updateId();
        return id;
    };
    /**
     * Method to update the "auto_increment" id on the local storage
     */
    StorageManager.prototype.updateId = function () {
        this.lastId++;
        window.localStorage.setItem(this.containerName + ':index', String(this.lastId));
    };
    /**
     * Method to remove an item from the local storage.
     * @param {number} id - id that corresponds to the item to be removed.
     * @returns {boolean}
     */
    StorageManager.prototype.removeData = function (id) {
        if (!this.getData(id)) {
            return false;
        }
        window.localStorage.removeItem(this.containerName + ':' + id);
        return true;
    };
    /**
     * Method to update data on local storage.
     * @param {number} id - id that corresponds to the item to be updated.
     * @param {object} data - data to be used on update.
     * @returns {boolean}
     * @example
     * // note that all fields must be sent again to replace the data.
     * var obj = new StorageManager('user');
     * var id = obj.editData(1, {
     *  'firstname': 'Jane',
     *  'lastname': 'Doe',
     *  'age': '28',
     * });
     */
    StorageManager.prototype.editData = function (id, data) {
        if (!this.getData(id)) {
            return false;
        }
        window.localStorage.setItem(this.containerName + ':' + id, JSON.stringify(data));
        return true;
    };
    /**
     * Method to return a single entry from the local storage.
     * @param {number} id - the id from the item you want to retrieve.
     * @returns {object} a javascript object
     * @example
     * var obj = new StorageManager('user');
     * var usr1 = obj.getData(1);
     * console.log(usr1);
     * // return a object like {
     * //   'firstname': 'Jane',
     * //   'lastname': 'Doe',
     * //   'age': '28',
     * // }
     */
    StorageManager.prototype.getData = function (id) {
        var data = false;
        var tmp;
        if (window.localStorage.getItem(this.containerName + ':' + id)) {
            tmp = window.localStorage.getItem(this.containerName + ':' + id);
            data = JSON.parse(tmp);
        }
        return data;
    };
    /**
     * Method that return all data from local storage
     * @returns {Array} return an array of objects
     */
    StorageManager.prototype.getFullData = function () {
        var data = [];
        var dTemp = {};
        for (var i = 1; i < this.lastId; i++) {
            dTemp = this.getData(i);
            if (dTemp) {
                dTemp['id'] = i;
                data.push(dTemp);
            }
        }
        return data;
    };
    /**
     * Method to get the last id from the local storage.
     * @returns {number}
     */
    StorageManager.prototype.getLastId = function () {
        return this.lastId;
    };
    return StorageManager;
})();
//# sourceMappingURL=StorageManager.js.map