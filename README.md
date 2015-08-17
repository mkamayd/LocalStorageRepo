# Local Storage

## Using the LocalStorage Lib

first you need to create a object to be used as the database handler.
```javascript
    var db = new StorageManager('user');
```

Once created the object you can then proceed to add, edit, delete or retrieve the data on the local storage.
*note that the local storage can only save about **5MB** of data*
```javascript
    // saving data to the local storage
	db.addData({
		'userName': 'john doe',
		'password': 'my_super_s3cr37_pwd',
		'email': 'myemail@local.com'
	});
```
This data will be saved in a associative array object in the local storage.
something like this:
    key = user:1
	value = {"userName": "john doe","password": "my_super_s3cr37_pwd","email": "myemail@local.com"}
It will also save a record to keep track of the auto_increment id on this particular "table" on the local storage.
This record will look like this:
    key = user:index
	value = 2
