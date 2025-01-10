helm install cert-manager jetstack/cert-manager \
--namespace cert-manager --create-namespace \
--version v1.16.1 \
--set installCRDs=true
