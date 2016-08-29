var AllDateTime1 = {
    startTime: 5,
    endTime: 55
}

var SpliceTime0 = {
    startTime: 5,
    endTime: 55
}
var SpliceTime00 = {
    startTime: 65,
    endTime: 75
}
var SpliceTime1 = {
    startTime: 5,
    endTime: 15
}
var SpliceTime2 = {
    startTime: 16,
    endTime: 18
}
var SpliceTime3 = {
    startTime: 18,
    endTime: 20
}
var SpliceTime4 = {
    startTime: 21,
    endTime: 32
}
var SpliceTime5 = {
    startTime: 32,
    endTime: 33
}
var SpliceTime6 = {
    startTime: 43,
    endTime: 45
}
var SpliceTime7 = {
    startTime: 55,
    endTime: 58
}
var arrSplice = []


function getTimeSplice(AllDateTime, SpliceTime, SpliceTime2, flag) {
    arrSplice.push({ sort: 1, flag: 1, value: AllDateTime.startTime })
    arrSplice.push({ sort: 2, flag: 1, value: AllDateTime.endTime })
    arrSplice.push({ sort: 3, flag: 2, value: SpliceTime.startTime })
    arrSplice.push({ sort: 4, flag: 2, value: SpliceTime.endTime })
    arrSplice.push({ sort: 5, flag: 3, value: SpliceTime2.startTime })
    arrSplice.push({ sort: 6, flag: 3, value: SpliceTime2.endTime })

    console.log("\nAll *********************************************")    
    console.log(AllDateTime)
    console.log("Splice1:\n")    
    console.log(SpliceTime)
    console.log("Splice2:\n")
    console.log(SpliceTime2)
    var arrSortSplice = []
    while (arrSplice.length) {
        var tmpMin = { sort: -1, flag: -1, value: -1 }
        var rindex = -1
        for (var index = 0; index < arrSplice.length; index++) {
            var element = arrSplice[index];
            if (element.value > tmpMin.value) {
                tmpMin = element
                rindex = index
            }
        }
        arrSortSplice.push(tmpMin)
        arrSplice.splice(rindex, 1)
    }
    var arrGetSplic = []
    var checkFlag = 0
    var checkSame = undefined
    for (var index = 0; index < arrSortSplice.length; index++) {
        var element = arrSortSplice[index];
        if (checkSame) {
            if (checkSame.value == element.value) {
                continue
            }
        }
        if (checkFlag >= 2) {
            break;
        }
       // console.log("flag:" + checkFlag + "," + element.value)

        if (element.flag == 1) {
            checkSame = element
            arrGetSplic.push(element)
            checkFlag = checkFlag + 1
        } else {
            if (arrGetSplic.length) {
                arrGetSplic.push(element)
            }
        }
    }
    var resutl = []
    var tmpFirst = undefined
    for (var index = 0; index < arrGetSplic.length; index++) {
        var element = arrGetSplic[index];
        if (!tmpFirst) {
            tmpFirst = element
        } else {
            if (tmpFirst.value == element.value) {
                continue
            }
            var tmpPush = { start: undefined, end: undefined, flag: 1 }
            if (tmpFirst.value > element.value) {
                tmpPush.start = element.value
                tmpPush.end = tmpFirst.value
            } else {
                tmpPush.start = tmpFirst.value
                tmpPush.end = element.value
            }

            if (tmpPush.end == SpliceTime.endTime || tmpPush.end == SpliceTime2.endTime) {
                tmpPush.flag = 4
            }
            resutl.push(tmpPush)
            tmpFirst = element

        }
    }
    //console.log(arrNewSplice)
    console.log("check:" + flag + " \n")
    //console.log(arrGetSplic)
    console.log(resutl)
}
getTimeSplice(AllDateTime1, SpliceTime0,SpliceTime00, 1)
getTimeSplice(AllDateTime1, SpliceTime1,SpliceTime2, 1)
getTimeSplice(AllDateTime1, SpliceTime2,SpliceTime3, 2)
getTimeSplice(AllDateTime1, SpliceTime3,SpliceTime4, 3)
getTimeSplice(AllDateTime1, SpliceTime4,SpliceTime5, 4)
getTimeSplice(AllDateTime1, SpliceTime5,SpliceTime6, 5)
getTimeSplice(AllDateTime1, SpliceTime6,SpliceTime7, 6)
getTimeSplice(AllDateTime1, SpliceTime7,SpliceTime1, 7)
