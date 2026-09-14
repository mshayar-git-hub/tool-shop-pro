FROM python:3.12-slim


ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

# CMD ["gunicorn", "faras_main.wsgi:application", "--bind", "0.0.0.0:8000"]
# CMD ["sh", "-c", "python manage.py migrate && gunicorn clickmart_main.wsgi:application --bind 0.0.0.0:8000 --workers 3 --timeout 180"]
# CMD ["gunicorn", "clickmart_main.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3" , "--timeout", "180"]
CMD ["sh", "-c", "python manage.py migrate && if [ \"$CREATE_SUPERUSER\" = \"true\" ]; then python manage.py createsuperuser --no-input; fi && gunicorn faras_main.wsgi:application --bind 0.0.0.0:8000 --workers 3 --timeout 180"]