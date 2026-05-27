# Mac 만화 라이브러리를 Wi-Fi로 iPhone에 스트리밍하기 (복사 없이)

BiblioFuse Mac Home Library는 Mac의 전체 만화 및 전자책 컬렉션을 Wi-Fi를 통해 iPhone 또는 iPad로 스트리밍할 수 있게 해준다 — 기기에 파일을 복사하지 않고 iPhone 저장 공간도 사용하지 않는다. iOS 17 이상의 iPhone 또는 iPad와 같은 Wi-Fi 네트워크에 있는 Mac의 CBZ, CBR, EPUB, PDF, TXT 라이브러리에서 작동하며, 추가 네트워크 설정이 필요 없다.

Mac 하드 드라이브에 400GB의 CBZ 및 EPUB 파일이 있지만 iPhone은 64GB가 전부이고 대부분이 이미 차 있습니다. iCloud는 느리고 스토리지를 소비하며, Wi-Fi Transfer로 개별 볼륨을 가져오는 것도 번거롭습니다.

[BiblioFuse](/ko/)의 Mac Home Library는 이 문제를 완전히 다른 방식으로 해결합니다. 파일을 iPhone으로 복사하는 것이 아니라 스트리밍합니다. Mac이 로컬 서버가 되고 iPhone은 필요할 때 페이지를 요청합니다. 아무것도 복사되지 않고 클라우드에 업로드되지도 않습니다. 같은 Wi-Fi 네트워크에 있는 한 400GB 전체 라이브러리를 iPhone에서 이용할 수 있습니다.

## Mac Home Library란

Mac Home Library는 로컬 스트리밍 기능이며 동기화 기능이 아닙니다.

**동기화**(iCloud 등)는 파일을 기기에 복사합니다. 400GB를 동기화하려면 iPhone에 400GB의 여유 공간이 필요하지만 대부분의 사용자에게는 그런 공간이 없습니다.

**스트리밍**은 아무것도 복사하지 않습니다. 파일은 Mac에 남고 iPhone은 읽는 동안 페이지를 가져옵니다. [BiblioFuse](/ko/)가 로컬 네트워크를 통해 관련 페이지를 요청하며 iPhone에서 사용하는 스토리지는 거의 없습니다.

## 필요한 것

- iOS 17 이상의 iPhone
- iPhone과 같은 Wi-Fi 네트워크의 Mac
- 두 기기 모두에 [BiblioFuse](/ko/) 설치 (iOS 앱 + Mac 컴패니언)
- Mac에 로컬로 저장된 만화 라이브러리

## Mac Home Library 설정

설정은 약 2분이 소요되며 특별한 네트워크 구성이 필요하지 않습니다.

**Mac에서:**

1. **BiblioFuse** (Mac 컴패니언 앱)를 엽니다.
2. **환경설정 → Home Library**로 이동합니다.
3. **Home Library 공유 활성화**를 클릭합니다.
4. macOS가 로컬 네트워크 통신 허가를 요청하면 **허용**을 클릭합니다.
5. `bibliofuse.local:8765` 형식의 로컬 URL이 표시됩니다.

**iPhone에서:**

1. iPhone에서 **BiblioFuse**를 엽니다.
2. **라이브러리** 탭을 탭합니다.
3. 상단의 소스 선택기를 탭하면 **Mac Home Library**가 로컬 라이브러리 옆에 나타납니다.
4. **Mac Home Library**를 탭합니다. Mac이 켜져 있고 공유가 활성화된 경우 몇 초 안에 연결이 완료되고 Mac의 전체 라이브러리가 표시됩니다.

IP 주소, 라우터 설정, 포트 포워딩이 필요 없습니다. BiblioFuse는 Bonjour를 사용하여 로컬 네트워크에서 Mac을 자동으로 검색합니다.

## 탐색 및 읽기

iPhone의 Mac Library 보기는 Mac의 폴더 구조를 그대로 반영합니다. 시리즈별로 폴더를 정리했다면 같은 폴더 구조가 표시됩니다.

볼륨을 탭하면 열립니다. BiblioFuse가 즉시 첫 페이지를 가져옵니다. 5GHz Wi-Fi 네트워크에서는 고해상도 CBZ 파일도 페이지당 1초 이내에 로드됩니다.

읽기 경험은 로컬에 저장된 볼륨과 동일합니다: 만화용 오른쪽에서 왼쪽 모드, 웹툰용 세로 스크롤, 가로 모드 이중 페이지, 확대/축소 및 이동.

## 읽기 진행 상황

Mac Home Library 세션의 읽기 진행 상황은 iCloud를 통해 동기화됩니다. Mac에서 스트리밍하며 87페이지까지 읽었다면 iPhone이 87페이지를 기록하고 iCloud에 전송합니다. iPad에서 같은 볼륨을 열면 87페이지부터 시작됩니다.

## Wi-Fi Transfer 및 iCloud Sync와의 차이

[BiblioFuse](/ko/)의 세 가지 기능은 각각 다른 목적을 위해 존재합니다:

- **Wi-Fi Transfer**: Mac에서 iPhone으로 파일을 이동하여 오프라인 컬렉션을 구성
- **iCloud Sync**: 중간 규모 라이브러리의 자동 기기 간 동기화
- **Mac Home Library**: iPhone 스토리지 없이 집에서 Wi-Fi로 전체 라이브러리 스트리밍

## 성능 팁

**5GHz Wi-Fi 사용**: Mac과 iPhone 모두 5GHz 대역에 연결하면 대용량 CBZ 파일 로드가 빨라집니다.

**Mac 잠자기 방지**: Mac이 잠들면 스트리밍 연결이 끊깁니다. **시스템 설정 → 배터리 → 전원 연결 시 잠자기 방지**에서 설정하세요.

**SSD가 더 빠름**: 라이브러리가 외장 HDD에 있으면 첫 페이지 로드에 약간의 지연이 생길 수 있습니다. SSD로 이동하면 해결됩니다.

## 오프라인 읽기

Wi-Fi 없는 환경으로 나가기 전에 Mac 라이브러리에서 개별 볼륨을 iPhone으로 미리 다운로드할 수 있습니다. Mac Library 보기에서 볼륨 옆의 **다운로드 아이콘**을 탭하면 BiblioFuse가 Wi-Fi Transfer를 통해 로컬 스토리지로 복사합니다.

## 시작하기

[BiblioFuse](/ko/)는 iPhone과 iPad용 App Store에서 무료로 다운로드할 수 있습니다. Mac Home Library는 기본 앱에 포함된 기능으로 추가 구매가 필요 없습니다. Mac과 iPhone에 앱을 설치하고 Mac 환경설정에서 공유를 활성화하면, 다음에 같은 네트워크에 연결할 때 전체 라이브러리를 iPhone에서 이용할 수 있습니다.


## 자주 묻는 질문

**BiblioFuse의 Mac 홈 라이브러리란 무엇인가요?**
Mac 홈 라이브러리는 BiblioFuse의 기능으로, Mac의 만화 및 전자책 라이브러리 전체를 Wi-Fi를 통해 iPhone 또는 iPad로 직접 스트리밍합니다. 파일이 기기에 복사되지 않아 iPhone 저장 공간을 사용하지 않습니다. Mac과 iPhone 모두에 BiblioFuse가 설치되어 있고 같은 Wi-Fi 네트워크에 있어야 합니다(원격 접근에는 Tailscale).

**Mac 홈 라이브러리는 iPhone 저장 공간을 얼마나 사용하나요?**
CBZ와 CBR 파일은 페이지별로 온디맨드 스트리밍되어 저장 공간을 0 사용합니다. EPUB와 TXT 파일은 읽기 전에 기기에 임시로 다운로드됩니다. 수백 GB의 컬렉션도 iPhone 저장 공간 없이 탐색하고 읽을 수 있습니다.

**집 밖에서 Mac 홈 라이브러리에 접근할 수 있나요?**
네, Tailscale을 사용하면 됩니다. Tailscale은 기기 간 개인 암호화 네트워크를 생성하여 모바일 데이터나 공공 Wi-Fi에서도 iPhone이 Mac에 접근할 수 있습니다. Tailscale 없이는 같은 로컬 Wi-Fi 네트워크에서만 작동합니다.

**Mac 홈 라이브러리 사용 시 독서 진행 상황이 동기화되나요?**
네. 스트리밍 세션의 독서 진행 상황은 Mac의 로컬 데이터베이스에 저장됩니다. BiblioFuse에서 iCloud가 활성화되어 있으면 진행 상황이 다른 기기와도 동기화됩니다.

**Mac 홈 라이브러리는 모든 파일 형식을 지원하나요?**
CBZ와 CBR은 페이지별로 스트리밍되어 전체 파일을 다운로드하지 않고 즉시 열립니다. EPUB와 TXT 파일은 먼저 기기에 다운로드된 후 열립니다. BiblioFuse가 지원하는 모든 형식을 Mac 홈 라이브러리를 통해 이용할 수 있습니다.
