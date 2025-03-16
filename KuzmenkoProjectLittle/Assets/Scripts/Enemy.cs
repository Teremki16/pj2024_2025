using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;

public class Enemy : MonoBehaviour
{
    [SerializeField] Patrol patrol;
    [SerializeField] AIDestinationSetter destination;
    [SerializeField] GameObject target;

    [SerializeField] int health = 5;

    private void Start()
    {
        slider = gameObject.transform.GetChild(1).
            getComponentInChildren<Slider>();
        slider.minValue = 1;
        slider.maxValue = health;
        slider.value = health;
        patrol = GetComponent<Patrol>();
        destination = GetComponent<AIDestinationSetter>();
        target = GameObject.Find("Player");
        destination.target = target.transform;
        for (int i = 0; i < GameObject.Find("PatrolPoints").transform.childCount; i++)
        {

        }


    }
    void Update()
    {
        float distance = Vector2.Distance(transform.position,
            target.transform.position);
        if (distance < 5f)
        {
            destination.enabled = true;
            patrol.enabled = false;
        }
        else
        {
            destination.enabled = false;
            patrol.enabled = true;
        }
    }
}
