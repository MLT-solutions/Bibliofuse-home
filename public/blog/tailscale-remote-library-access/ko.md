# BiblioFuse와 Tailscale로 집의 만화 라이브러리에 원격 접근하기

출장 중 밤 10시 호텔 방에 앉아 있는데 읽을 것이 없다. 800권의 만화 컬렉션이 집 Mac에 연결된 외장 드라이브에 고스란히 있는데. 보통은 집에 돌아올 때까지 기다려야 했다. 이제는 아니다.

BiblioFuse의 홈 라이브러리 스트리밍 기능은 iPhone이 세계 어디에서나 집 Mac과 같은 Wi-Fi 네트워크에 있는 것처럼 연결할 수 있게 해준다. 이를 가능하게 하는 브릿지는 Tailscale이다. 포트 포워딩, 고정 IP, 라우터 설정이 필요 없는 제로 구성 VPN 메시가 백그라운드에서 조용히 실행된다.

## "클라우드에 업로드하면 되지"가 답이 아닌 이유

명백한 대안은 iCloud, Dropbox, Google Drive에 라이브러리를 동기화하는 것이다. 소규모 컬렉션에는 효과적이지만, 규모가 커지면 문제가 생긴다.

- 1TB 만화 라이브러리는 가정용 인터넷으로 업로드하는 데 몇 주가 걸린다.
- 그 규모의 클라우드 스토리지는 월 10~30달러가 무기한 발생한다.
- 통제권을 잃는다. 모든 만화의 모든 페이지가 다른 사람의 서버에 놓이게 된다.

Tailscale 방식은 아무것도 업로드하지 않는다. 라이브러리는 Mac에 남아 있고, iPhone은 암호화된 터널을 통해 온디맨드로 페이지를 가져온다. 스토리지 비용은 없고, 파일은 절대로 내 통제를 벗어나지 않는다.

## BiblioFuse 홈 스트리밍의 작동 방식

macOS용 BiblioFuse에는 iPhone 앱이 연결할 수 있는 내장 HTTP 서버가 포함되어 있다. 두 기기가 같은 Wi-Fi 네트워크에 있을 때 iPhone은 Mac 라이브러리를 탐색하고, 읽는 동안 페이지를 스트리밍하고, 독서 진행 상황을 동기화할 수 있다. 파일 복사 없이.

Tailscale은 그 로컬 네트워크를 어디에서나 확장하여, Mac의 프라이빗 IP 주소를 내 계정 아래에서 Tailscale을 실행하는 모든 기기에서 엔드 투 엔드 암호화로 안전하게 접근할 수 있게 한다.

## Tailscale이 하는 일

Tailscale은 빠르고 암호학적으로 강력하기로 알려진 현대적인 VPN 프로토콜인 WireGuard 위에 구축되었다. 피어 투 피어 메시를 만들어 각 기기가 중앙 서버를 통하지 않고 내 계정 아래의 다른 기기에 직접 연결된다.

설정은 약 5분이 걸리며 라우터 접근이 필요하지 않다.

## 단계별 설정

### Mac에서

1. [tailscale.com](https://tailscale.com) 또는 Mac App Store에서 Tailscale을 다운로드한다.
2. Google, GitHub, Microsoft로 로그인하거나 무료 Tailscale 계정을 만든다.
3. Mac의 Tailscale IP 주소를 기록해 둔다(예: `100.x.x.x`).
4. Mac에서 BiblioFuse를 열고 **환경설정 → 홈 라이브러리 서버**로 이동한다.
5. 서버를 활성화한다. 기본 포트는 `8686`이다.

### iPhone에서

1. App Store에서 Tailscale을 설치한다.
2. Mac에서 사용한 것과 같은 Tailscale 계정으로 로그인한다.
3. Tailscale VPN 토글을 활성화한다.
4. iPhone에서 [BiblioFuse](https://bibliofuse.com/ko/)를 열고 **라이브러리 → Mac에 연결**로 이동한다.
5. Mac의 Tailscale IP 주소와 포트 `8686`을 입력한다.
6. 연결을 탭하면 Mac 라이브러리가 즉시 나타난다.

## 성능과 대역폭

Tailscale은 가능하면 직접 피어 투 피어 연결을 설정한다. 일반적인 호텔 Wi-Fi나 모바일 연결(20~50Mbps)에서 만화 페이지 스트리밍은 편안하게 작동한다. BiblioFuse는 현재 페이지만 전송하고 다음 페이지를 미리 로드한다.

## 개인정보와 보안

Tailscale 연결은 WireGuard로 엔드 투 엔드 암호화된다. 다른 누구도 내 BiblioFuse 서버에 접근할 수 없다. 파일은 절대로 제3자 서버를 통하지 않는다.

## 자주 묻는 질문

**Mac이 켜져 있어야 합니까?**
그렇다. BiblioFuse는 Mac이 활성화된 동안 실행된다. 시스템 설정 → 배터리에서 자동 절전을 비활성화한다.

**모바일 데이터로도 작동합니까?**
그렇다. Tailscale은 모든 인터넷 연결에서 작동한다. 만화 스트리밍은 압축 설정에 따라 페이지당 약 1~3MB를 사용한다.

**여러 Mac과 사용할 수 있습니까?**
가능하다. 각 Mac을 Tailscale 계정에 추가하고 BiblioFuse에서 연결로 저장한다.

**Tailscale은 유료입니까?**
최대 3명의 사용자와 100개의 기기를 지원하는 무료 티어가 있다. 개인 사용에는 충분하다.

## 시작하기

아직 [BiblioFuse](https://bibliofuse.com/ko/)가 없다면 iPhone과 iPad용은 App Store에서, macOS용은 Mac App Store에서 다운로드하자. Tailscale은 [tailscale.com](https://tailscale.com)에서 무료로 다운로드할 수 있다.

두 가지를 결합하면 집의 라이브러리가 항상 함께하는 것처럼 느껴진다. 단 하나의 파일도 클라우드에 업로드하지 않고.
