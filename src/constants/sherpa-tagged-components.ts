import { JSX } from "@npm-bbta/bbog-dig-dt-sherpa-lib/dist/types/components";
import { createReactComponent } from "../react-component-lib";

export const tag = "cont-rlb";

export const CustDisBdbMlModal = createReactComponent<
	JSX.SpMlModal,
	HTMLSpMlModalElement
>(`${tag}-sp-ml-modal`);

export const CustDisBdbMlModalNormal = createReactComponent<
	JSX.SpMlModalNormal,
	HTMLSpMlModalNormalElement
>(`${tag}-sp-ml-modal-normal`);

export const CustRlbLoader = createReactComponent<
	JSX.SpMlLoader,
	HTMLSpMlLoaderElement
>(`${tag}-sp-ml-loader`);

export const CustRlbHeader = createReactComponent<
	JSX.SpMlHeader,
	HTMLSpMlHeaderElement
>(`${tag}-sp-ml-header`);

export const CustRlbAlert = createReactComponent<
	JSX.SpAtAlert,
	HTMLSpAtAlertElement
>(`${tag}-sp-at-alert`);

export const CustRlbSurvey = createReactComponent<
	JSX.SpMlBmSurvey,
	HTMLSpMlBmSurveyElement
>(`${tag}-sp-ml-bm-survey`);

export const CustRlbPictogram = createReactComponent<
	JSX.SpPictogram,
	HTMLSpPictogramElement
>(`${tag}-sp-pictogram`);

export const CustRlbTag = createReactComponent<
	JSX.SpAtTag,
	HTMLSpAtTagElement
>(`${tag}-sp-at-tag`);

export const CustRlbButton = createReactComponent<
	JSX.SpAtLoadButton,
	HTMLSpAtLoadButtonElement
>(`${tag}-sp-at-load-button`);
