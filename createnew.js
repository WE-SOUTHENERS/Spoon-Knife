test = function()
{
    var a = 0;

    test.alertA = function()
    {
        return function()
	{
	    alert(a);
	}
    }()();
}

var myTest = new test();
test.alertA();
