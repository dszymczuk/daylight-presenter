GREEN='\033[1;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
printf "${YELLOW}"
printf "Building application"
echo ""
npm run build
echo ""
printf "${NC}\n"

printf "${GREEN}"
printf "Starting application"
echo ""
npm run start:prod
echo ""
printf "${NC}\n"