# Summary

## Stack

* Firebase
* FlatList (with new props `numColumns`)
  * FlatList 상세 내용은 이전 튜토리얼 [RN-Tutorial-Noovies](https://github.com/seungwubaek/RN-Tutorial-Noovies/blob/master/docs/Summary.md#scrollview--flatlist) 참고
* VICTORY (Chart Library)

## Firebase

<https://firebase.google.com/?hl=ko>

* Installation
  * Firebase Console에서 Project 생성
  * 소스에서 android/ios 설정
  * 소스에서 패키지 추가
* Authentication
  * Firebase Console에서 Authentication 활성화
  * 소스에서 Authentication 구현
    * Social Login/Join
      * iOS에서 Social Login/Join 구현시, Apple Login을 꼭 추가해야 함. 그렇지 않으면 앱 스토어 등록시 거절됨

## FlatList

* `numColumns`
  * FlatList에서 열 수를 지정하는 prop

## Victory

Chart Library support React and React Native

<https://formidable.com/open-source/victory/docs>

* VictoryTheme
* VictoryChart
  * `padding`: label이 잘리는 것을 방지하기 위해 padding을 조정
* VictoryAxis
  * `dependentAxis`: y축
  * `tickLabelComponent`: label의 style을 조정. `angle`을 조정하기 위해 `VictoryLabel`을 함께 사용 가능`
  * `style`
    * `tickLabels`: label의 style 조정. `tickLabelComponent`가 특별히 스타일 외 다른일을 하지 않으면 이 속성값으로 대신 쓸 수 있음
* VictoryLabel
  * `style`
    * `fill`: label 색상
    * `fontSize`: label 크기
    * `textAnchor`: label 위치 (`start`, `middle`, `end`)
    * `angle`: label의 각도
* VictoryLine
  * `interpolation`
  * `style`
    * `data`
      * `stroke`: line 색상
  * `animate`
* VictoryScatter
