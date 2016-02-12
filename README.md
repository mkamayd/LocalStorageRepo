# Local Storage

### Using the LocalStorage Lib

first you need to create a object to be used as the database handler.
```javascript
    var db = new StorageManager('user');
```
Once created the object you can then proceed to add, edit, delete or retrieve the data on the local storage.
*note that the local storage can only save about* **5MB** *of data*
##### Saving Data
To save data you need to pass a javascript object that will be parsed as string to the local storage.
The method return the id of the inserted data.
```javascript
    // saving data to the local storage
	var id = db.addData({
		userName: 'john doe',
		password: 'my_super_s3cr37_pwd',
		email: 'myemail@local.com'
	});
```
This data will be saved in a associative array object in the local storage.
something like this:
```javascript
    key = user:1
	value = {"userName": "john doe","password": "my_super_s3cr37_pwd","email": "myemail@local.com"}
```
It will also save a record to keep track of the auto_increment id on this particular "table" on the local storage.
This record will look like this:
```javascript
    key = user:index
	value = 2
```

##### Updating Data

To update data on a record, you have to pass the complete dataset to be updated. Currently there is no way to update a single field in the local storage.
*(maybe at anoter release?)*
```javascript
    var updated = db.editData(1, {
		userName: 'jane doe',
		password: 'anotherRandomPswd',
		email: 'mynewemail@local.com'
	});
```
This method returns a boolean to informe if the data has been updated.

##### Retrieving Data

To retrieve data you only need the numeric id that represent the desired record.
```javascript
    var data = db.getData(1);
	// data will be an object like this:
	//{
	//	userName: 'jane doe',
	//	password: 'anotherRandomPswd',
	//	email: 'mynewemail@local.com'
	//}
```

When you use the method `getFullData()` it returns an array containing objects in the same format as `getData(id)`.

##### Removing Data
To remove a record from the local storage just call the method passing an id.
```javascript
    var removed = db.removeData(1);
```
This method returns a boolean to inform if the record has been removed.