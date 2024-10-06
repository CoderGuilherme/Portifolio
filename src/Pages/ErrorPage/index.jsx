import Typography from "../../Components/Typograph";
import { colors } from "../../utils/colors";

function ErrorPage() {
  return (
    <div className="h-svh flex align-middle justify-center">
      <Typography
        variant="h1"
        addClassName="my-auto"
        color={colors.brandPrimary}
      >
        Erro - Não encontramos essa página
      </Typography>
    </div>
  );
}

export default ErrorPage;
