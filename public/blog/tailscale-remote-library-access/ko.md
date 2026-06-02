# BiblioFuse와 Tailscale로 집 만화 라이브러리에 원격 접속하기

BiblioFuse는 iOS 17 이상이 설치된 iPhone과 iPad에서 CBZ, CBR, EPUB, PDF, ZIP, RAR, TXT 파일을 읽을 수 있습니다. Mac Home Library 기능을 사용하면 파일을 복사하지 않고도 로컬 Wi-Fi 네트워크를 통해 Mac의 전체 만화 라이브러리를 iPhone으로 스트리밍할 수 있습니다. Tailscale과 결합하면 동일한 스트리밍 연결을 인터넷을 통해 확장해 세계 어디서든 BiblioFuse와 Tailscale로 집 라이브러리에 원격 접속할 수 있습니다.

집에 2 TB의 만화가 저장된 Mac을 두고 외출합니다. iPhone의 저장 공간은 128 GB에 불과해 전부 담기에는 턱없이 부족합니다. 파일을 클라우드로 옮기거나 별도의 동기화 서비스에 돈을 내지 않고 여행 중에도 그 라이브러리를 읽고 싶습니다. 이 가이드는 [BiblioFuse](/ko/)와 Tailscale 무료 플랜을 사용해 이를 실현하는 방법을 알려드립니다.

## BiblioFuse와 Tailscale을 이용한 만화 라이브러리 원격 접속이란?

BiblioFuse의 Mac Home Library 기능은 Mac을 만화 컬렉션의 스트리밍 서버로 변환합니다. iPhone과 Mac이 같은 Wi-Fi 네트워크에 연결되어 있으면, iPhone의 BiblioFuse에서 Mac 파일을 탐색하고 열 수 있습니다. 복사, 동기화, 폰 저장 공간 사용이 전혀 필요 없습니다.

제약은 "같은 네트워크"라는 점입니다. 집을 떠나는 순간 연결이 끊깁니다. Mac이 가정용 라우터 뒤에 있어 iPhone이 직접 접근할 수 없기 때문입니다.

Tailscale은 기기 간에 암호화된 피어 투 피어 메시 네트워크를 생성해 이 문제를 해결합니다. iPhone과 Mac은 물리적 위치와 상관없이 같은 가상 네트워크에 나타납니다. BiblioFuse 입장에서는 Mac Home Library 연결이 인터넷을 통해서도 집 Wi-Fi에서와 똑같이 작동한다는 의미입니다.

## BiblioFuse와 Tailscale이 클라우드 스토리지보다 나은 이유는?

클라우드 스토리지는 명백한 대안처럼 보입니다. iCloud Drive나 Google Drive에 모두 동기화하고 어디서든 접속하는 방식입니다. 하지만 대용량 만화 라이브러리에는 클라우드 동기화에 현실적인 한계가 있습니다.

- **스토리지 비용.** iCloud 2 TB는 월 11,100원입니다. Tailscale 무료 플랜은 스토리지 요금 없이 100대 기기를 지원합니다.
- **업로드 시간.** 가정용 인터넷으로 2 TB를 클라우드에 업로드하려면 며칠이 걸립니다. Tailscale + BiblioFuse는 Mac에서 직접 스트리밍하므로 업로드가 불필요합니다.
- **프라이버시.** 파일이 네트워크 밖으로 나가지 않습니다. Tailscale은 트래픽을 피어 투 피어로 라우팅하며 릴레이 서버는 연결 협상만 처리할 뿐 파일 내용에 관여하지 않습니다.
- **읽기 경험.** [BiblioFuse](/ko/) Mac Home Library를 통한 스트리밍은 빠릅니다. 탭하면 바로 페이지가 로드되어 로컬 저장소와 동일합니다. 클라우드 동기화 파일은 열기 전에 전체 다운로드가 필요합니다.

## 1단계 — BiblioFuse에서 Mac Home Library 설정

BiblioFuse의 Mac Home Library는 로컬 네트워크를 통해 Mac의 만화 폴더를 iPhone 앱에 제공하는 기능입니다.

1. iPhone과 Mac 양쪽에 **BiblioFuse**를 설치합니다 (각 플랫폼의 App Store에서)
2. Mac에서 BiblioFuse를 열고 **설정 → Mac Home Library**로 이동합니다
3. **활성화**를 클릭합니다 — Mac이 로컬 포트에서 라이브러리 서비스를 시작합니다
4. iPhone에서 BiblioFuse를 열고 **라이브러리 → 소스 추가 → Mac Home Library**로 이동합니다
5. 로컬 네트워크에서 Mac이 자동으로 나타나야 합니다. 탭해서 연결합니다.

작동 확인: iPhone에서 Mac의 폴더를 탐색하고 CBZ 파일을 엽니다. 1~2초 안에 페이지가 로드되어야 합니다. 로컬 Wi-Fi에서 작동하면 Tailscale을 추가할 준비가 된 것입니다.

## 2단계 — Tailscale 설치 및 구성

Tailscale은 WireGuard를 기반으로 구축된 VPN입니다. 무료 플랜은 최대 100대 기기를 지원하며 여기서 필요한 모든 것을 포함합니다.

1. **tailscale.com**으로 이동해 무료 계정을 만듭니다
2. Mac에 **Tailscale 앱**을 설치합니다 (App Store 또는 tailscale.com/download에서 이용 가능)
3. iPhone에 **Tailscale 앱**을 설치합니다 (App Store에서)
4. 같은 계정으로 두 기기 모두 Tailscale에 로그인합니다
5. Mac의 Tailscale 앱에서 Tailscale IP 주소 (일반적으로 `100.x.x.x`)가 표시되는지 확인합니다
6. iPhone에서 Tailscale 앱을 열고 Mac이 기기 목록에 녹색 상태로 표시되는지 확인합니다

이제 두 기기가 개인 Tailscale 네트워크에 연결되어 물리적 위치에 상관없이 통신할 수 있습니다.

## 3단계 — Tailscale을 통해 BiblioFuse를 Mac에 연결

Tailscale이 실행 중이면 BiblioFuse는 Tailscale IP 주소를 사용해 Mac의 Home Library에 접근할 수 있습니다.

1. Mac에서 Tailscale IP 주소를 메모합니다 (Tailscale 메뉴 막대 앱에 표시됨 — 예: `100.64.0.2`)
2. iPhone에서 BiblioFuse를 열고 **라이브러리 → 소스 추가 → Mac Home Library**로 이동합니다
3. Mac이 자동으로 나타나지 않으면 (다른 네트워크에서는 나타나지 않음), **주소 수동 입력**을 탭합니다
4. Tailscale IP 주소와 BiblioFuse가 사용하는 포트를 입력합니다 (기본값: `8080`)
5. **연결**을 탭합니다

이제 iPhone의 BiblioFuse에 Mac 라이브러리가 나타납니다. 폴더를 열고 볼륨을 탭하면 로컬 Wi-Fi에서와 똑같이 Tailscale을 통해 스트리밍됩니다.

## 4단계 — 외출 중에도 유지하기

원격 접속이 작동하려면 Mac이 다음 상태여야 합니다.

- **깨어 있어야 함** — 네트워크 접속을 위해 절전 모드 비활성화: **시스템 설정 → 배터리 → 옵션 → 디스플레이가 꺼져 있을 때 자동으로 잠자기 방지** (Mac 데스크탑의 경우) 또는 일정을 구성합니다
- **인터넷에 연결** — 여행 중에도 가정용 라우터는 연결 상태를 유지합니다
- **Tailscale 실행 중** — Tailscale 환경설정에서 로그인 시 시작하도록 설정합니다

MacBook에서는 "잠자기 방지" 옵션에 전원 어댑터가 필요합니다. 집의 Mac이 전원에 연결되지 않은 MacBook이라면 특정 일정을 설정하세요. 예를 들어 06:00에 깨우고 23:00에 잠자기.

## 실제 활용 사례

**여행 중 장편 시리즈 읽기.** 완전판 원피스 (107권, 압축 CBZ로 약 15 GB)가 집 Mac에 저장되어 있습니다. Wi-Fi가 없는 비행기에서는 접속할 수 없지만, 인터넷 연결이 있는 여행 중 (호텔 Wi-Fi, 모바일 데이터)에는 [BiblioFuse](/ko/)가 페이지를 온디맨드로 스트리밍합니다. 15 GB를 다운로드하는 것이 아니라 읽으면서 개별 페이지를 다운로드합니다.

**느린 연결에서 읽기.** Tailscale은 모바일 데이터에서 효율적인 WireGuard를 사용합니다. BiblioFuse 도구 탭에서 WebP로 압축된 CBZ 페이지는 일반적으로 각 200~500 KB입니다. 10~20 Mbps 4G 속도에서 각 페이지는 0.1초 미만으로 로드됩니다. 2 Mbps의 혼잡한 호텔 Wi-Fi에서도 페이지는 1초 안에 로드됩니다.

**가족 라이브러리 관리.** 배우자의 iPhone이나 태블릿을 같은 Tailscale 계정에 추가하면 (무료 플랜에서 최대 100대) 가족 모두가 별도의 클라우드 구독 없이 같은 Mac 라이브러리에서 스트리밍할 수 있습니다.

## 문제 해결

**Tailscale 활성화 후 BiblioFuse에 Mac이 나타나지 않음.** Mac의 Tailscale IP 주소로 수동 IP 입력 방법을 사용하세요. 자동 검색은 네트워크 경계를 넘지 못하는 mDNS 브로드캐스트에 의존합니다.

**모바일 데이터에서 페이지 로드가 느림.** BiblioFuse 도구 탭이나 [BiblioFuse 웹 도구](/ko/webapp/)를 사용해 CBZ 아카이브를 압축해 페이지 크기를 줄이세요. 품질 82의 WebP 인코딩 CBZ 파일은 PNG 기반 아카이브보다 일반적으로 75~88% 더 작아 원격 스트리밍이 훨씬 빨라집니다.

**Mac이 절전 모드로 전환됨.** Mac 시스템 설정에서 "디스플레이가 꺼져 있을 때 자동으로 잠자기 방지"를 활성화하거나, 터미널에서 `caffeinate -i &` 명령을 실행해 깨어 있도록 유지하세요.

**Tailscale 연결이 끊김.** Tailscale은 네트워크 상황이 변경될 때 자동으로 재연결합니다. 연결이 실패하면 iPhone에서 BiblioFuse를 닫고 다시 열어 연결을 재시도하세요.

## 자주 묻는 질문

**Tailscale 없이 집 만화 라이브러리에 원격 접속할 수 있나요?**
가능하지만 대안은 더 복잡하거나 덜 안전합니다. 라우터의 포트 포워딩은 Mac을 인터넷에 직접 노출시켜 보안 위험이 됩니다. 클라우드 동기화 (iCloud, Google Drive)는 먼저 전체 라이브러리를 업로드해야 합니다. Tailscale은 어떤 포트도 노출하지 않고 암호화된 제로 구성 원격 접속을 제공합니다.

**이 용도로 Tailscale은 비용이 드나요?**
Tailscale 무료 플랜은 단일 개인 계정에서 스토리지 요금과 대역폭 제한 없이 최대 100대 기기를 지원합니다. 자신의 기기 간에 공유하는 개인 만화 라이브러리에는 무료 플랜이 무기한으로 충분합니다.

**모바일 데이터 연결에서 만화 스트리밍 속도는 어떤가요?**
압축된 CBZ 파일 (WebP 페이지)의 경우 개별 페이지는 일반적으로 200~500 KB입니다. 10 Mbps 4G 연결에서 각 페이지는 0.5초 미만으로 로드됩니다. 2 Mbps의 느린 호텔 Wi-Fi에서도 읽기 경험은 매끄럽습니다. PNG 기반 아카이브 (페이지당 2~5 MB)는 눈에 띄게 느리며 원격 스트리밍 전 압축으로 가장 큰 혜택을 받습니다.

**BiblioFuse는 iPad에서도 Tailscale과 함께 작동하나요?**
네. BiblioFuse는 iPhone과 iPad를 모두 지원하며 Tailscale도 iPad에서 사용 가능합니다. 설정은 동일합니다. 두 앱을 설치하고 Tailscale에 로그인한 후 Tailscale IP 주소를 사용해 Mac Home Library에 연결하면 됩니다.

**Tailscale 사용 시 만화 컬렉션의 프라이버시가 보호되나요?**
네. Tailscale은 기기 간 모든 트래픽에 WireGuard 암호화를 사용합니다. 파일은 암호화된 터널을 통해 iPhone과 Mac 사이에서 직접 전송됩니다. Tailscale 서버는 연결 조정을 처리하지만 파일 내용을 볼 수 없습니다.

**외출 중 Mac이 재시작되면 어떻게 되나요?**
Tailscale이 로그인 시 시작하도록 설정되어 있고, BiblioFuse for Mac에서 Mac Home Library가 시작 시 실행되도록 설정되어 있으면 재시작 후 자동으로 연결이 복원됩니다. 연속성을 보장하기 위해 각각의 설정에서 두 앱 모두 로그인 시 시작하도록 설정하세요.
