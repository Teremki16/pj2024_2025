using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;
using UnityEngine.UI;

public class Enemy : MonoBehaviour
{
    [SerializeField] Patrol patrol;
    [SerializeField] AIDestinationSetter destination;
    [SerializeField] GameObject target;

    [SerializeField] int health = 5;

    private Slider slider;
    private void Start()
    {
        slider = gameObject.transform.GetChild(0).
            GetComponentInChildren<Slider>();
        slider.minValue = 1;
        slider.maxValue = health;
    }

    void Update()
    {
        float distance = Vector2.Distance(transform.position,
                    target.transform.position);
        if (distance < 5) 
        {
            destination.enabled = true;
            patrol.enabled = false;
        }
        else
        {
            destination.enabled = false;
            patrol.enabled = true;
        }
            if (health <= 0) Destroy(gameObject);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "bullet")
        {
            health--;
            slider.value = health;
            Destroy(collision.gameObject);
            transform.GetChild(0).gameObject.GetComponent
                <SpriteRenderer>().color = new Color(0, 255, 0);
            Invoke("CancgeColor", 0.2f);
        }
    }

    private void CancgeColor()
    {
        transform.GetChild(0).gameObject
            .GetComponent<SpriteRenderer>()
            .color = Color.white;
    }

}
