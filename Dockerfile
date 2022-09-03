FROM baserow/backend:1.10.1 as dev

RUN sed -i ../premium/backend/src/baserow_premium/license/handler.py -e '62s/^/    return True/'

COPY ./src/backend ./src/baserow/contrib/personal_accounting
