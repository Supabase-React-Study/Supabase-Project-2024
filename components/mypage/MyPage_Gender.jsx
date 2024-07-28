

export default async function MyPage(user_gender) {

    console.log(user_gender);

    var ele = document.getElementById('sex');
    var count = ele.clientHeight;

    for(var i=0; i < ele.length; i++) {
        console.log(ele[i].value);
    }

    return (
    <div className="sex" >
        <div>性別 </div>
        < div className="select-sex" >
            <input type="radio" id="man" name="gender" value="man" /> <label for="男" > 男 </label>
            < input type="radio" id="woman" name="gender" value="woman" /> <label for="女" > 女 </label>
            < input type="radio" id="etc" name="gender" value="etc" /> <label for="その他" > その他 </label>
        </div>
    </div>
    );
}
